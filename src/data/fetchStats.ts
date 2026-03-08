import { statsHighlights } from "./siteConfig";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/1NDykP4bxVt_H50z4poqmUwWe12aX8XtlW-UZ8neKfw4/export?format=csv&gid=436419451";

// フォールバック値（siteConfig.ts のハードコード値）
const FALLBACK_PARTICIPANTS = statsHighlights[0].number;
const FALLBACK_SESSIONS = statsHighlights[1].number;

export interface SeminarStats {
  totalParticipants: string;
  totalSessions: string;
}

/** CSVの行をパース（クォート対応） */
function parseCSVRow(row: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < row.length; i++) {
    const char = row[i];
    if (char === '"') {
      if (inQuotes && row[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

/**
 * スプレッドシートCSVからセミナー実績を取得する。
 * 取得失敗時は siteConfig.ts のハードコード値にフォールバック。
 */
export async function fetchStats(): Promise<SeminarStats> {
  try {
    const res = await fetch(CSV_URL, {
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const csv = await res.text();
    const rows = csv.trim().split("\n");
    const dataRows = rows.slice(1); // ヘッダー除外

    // 開催回数: 参加者数（C列）が入っている行をカウント
    let sessionCount = 0;
    for (const row of dataRows) {
      const cols = parseCSVRow(row);
      if (cols[2]?.trim()) {
        sessionCount++;
      }
    }

    // 延べ参加者数: E2（最初のデータ行のE列）
    const firstDataCols = parseCSVRow(dataRows[0]);
    const participantsRaw = firstDataCols[4] || "";
    const participantsNum = participantsRaw.replace(/[^0-9]/g, "");

    if (!participantsNum || !sessionCount) {
      throw new Error("CSV data is incomplete");
    }

    return {
      totalParticipants: participantsNum,
      totalSessions: String(sessionCount),
    };
  } catch (e) {
    console.warn("fetchStats failed, using fallback:", e);
    return {
      totalParticipants: FALLBACK_PARTICIPANTS,
      totalSessions: FALLBACK_SESSIONS,
    };
  }
}
