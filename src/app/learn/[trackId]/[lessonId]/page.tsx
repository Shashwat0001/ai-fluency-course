import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import LessonPlayer from "@/components/lesson/LessonPlayer";
import { CURRICULUM_TRACKS } from "@/data/curriculum";

export async function generateStaticParams() {
  return CURRICULUM_TRACKS.flatMap((track) =>
    track.lessons.map((lesson) => ({ trackId: track.id, lessonId: lesson.id }))
  );
}

function findLesson(trackId: string, lessonId: string) {
  const track = CURRICULUM_TRACKS.find((t) => t.id === trackId);
  const lessonIndex = track?.lessons.findIndex((l) => l.id === lessonId) ?? -1;
  if (!track || lessonIndex === -1) return null;
  return { track, lessonIndex, lesson: track.lessons[lessonIndex] };
}

interface LessonPageProps {
  params: Promise<{
    trackId: string;
    lessonId: string;
  }>;
}

export async function generateMetadata({ params }: LessonPageProps) {
  const { trackId, lessonId } = await params;
  const found = findLesson(trackId, lessonId);
  return { title: found ? `${found.lesson.title} | AI Fluency` : "Lesson not found | AI Fluency" };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { trackId, lessonId } = await params;
  const found = findLesson(trackId, lessonId);
  if (!found) notFound();

  const { track, lesson, lessonIndex } = found;
  const prev = track.lessons[lessonIndex - 1];
  const next = track.lessons[lessonIndex + 1];

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col font-sans">
      <Navbar/>
      <LessonPlayer
        lesson={lesson}
        trackId={track.id}
        trackNumber={track.number}
        lessonIndex={lessonIndex}
        lessonCount={track.lessons.length}
        prevLesson={prev ? { id: prev.id, title: prev.title } : null}
        nextLesson={next ? { id: next.id, title: next.title } : null}
      />
    </div>
  );
}
