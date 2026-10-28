// Course content hub. Each track lives in its own file under ./tracks/ so two
// people can edit different tracks without clashing. The AI Pulse is in ./pulse.ts.

import type { Track } from "./types";
import { TRACK_1 } from "./tracks/track-1-foundations";
import { TRACK_2 } from "./tracks/track-2-jargon-buster";
import { TRACK_3 } from "./tracks/track-3-ai-players";
import { TRACK_4 } from "./tracks/track-4-modern-world";
import { TRACK_5 } from "./tracks/track-5-tech-fluency";
import { TRACK_6 } from "./tracks/track-6-biweekly-pulse";

export * from "./types";
export { BI_WEEKLY_META, BI_WEEKLY_PULSE_FEED } from "./pulse";

export const CURRICULUM_TRACKS: Track[] = [TRACK_1, TRACK_2, TRACK_3, TRACK_4, TRACK_5, TRACK_6];
