import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import LessonQuiz from "@/components/LessonQuiz";
import { CURRICULUM_TRACKS } from "@/data/curriculum";
import {
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  MessagesSquare,
  Briefcase,
  GraduationCap,
  BookMarked,
  Clock,
  CalendarClock,
} from "lucide-react";

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

export async function generateMetadata({ params }: PageProps<"/learn/[trackId]/[lessonId]">) {
  const { trackId, lessonId } = await params;
  const found = findLesson(trackId, lessonId);
  return { title: found ? `${found.lesson.title} | AI Fluency` : "Lesson not found | AI Fluency" };
}

export default async function LessonPage({ params }: PageProps<"/learn/[trackId]/[lessonId]">) {
  const { trackId, lessonId } = await params;
  const found = findLesson(trackId, lessonId);
  if (!found) notFound();

  const { track, lesson, lessonIndex } = found;
  const prevLesson = track.lessons[lessonIndex - 1];
  const nextLesson = track.lessons[lessonIndex + 1];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] flex flex-col font-sans">
      <Navbar/>

      <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Link href="/#curriculum" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-[#0F172A]">
          <ArrowLeft className="w-4 h-4"/> Course Map
        </Link>

        <header className="mt-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
            Track {track.number} • Lesson {lessonIndex + 1} of {track.lessons.length}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">{lesson.title}</h1>
          <p className="mt-2 text-lg text-slate-600">{lesson.subtitle}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
            <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5"/> {lesson.durationMinutes} min</span>
            <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-[#4F46E5]">+{lesson.xpReward} XP</span>
            <span>Updated {lesson.lastUpdated}</span>
          </div>
        </header>

        {lesson.isUpdatedBiWeekly && (
          <aside className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-900">
            <div className="flex items-center gap-2 font-semibold">
              <CalendarClock className="w-4 h-4"/>
              <span>Fast-moving topic: accurate as of {lesson.lastUpdated}</span>
            </div>
            <p className="mt-1 leading-relaxed">
              AI products, rankings and prices change every few weeks. Treat specific comparisons here as a snapshot, not a permanent fact.
            </p>
            {lesson.sources && lesson.sources.length > 0 && (
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {lesson.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </aside>
        )}

        <section className="mt-10 p-6 rounded-2xl bg-white border border-[#E2E8F0]">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">The Big Idea</p>
          <h2 className="mt-2 text-xl font-bold leading-snug">{lesson.bigIdea.headline}</h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">{lesson.bigIdea.explanation}</p>
        </section>

        <section className="mt-6 p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100">
          <div className="flex items-center gap-2 text-[#4F46E5]">
            <Lightbulb className="w-5 h-5"/>
            <span className="text-xs font-bold uppercase tracking-wider">The Everyday Analogy</span>
          </div>
          <h2 className="mt-2 text-xl font-bold">{lesson.analogy.title}</h2>
          <p className="mt-3 text-base leading-relaxed font-medium">{lesson.analogy.metaphor}</p>

          <div className="mt-5 grid gap-3">
            {lesson.analogy.visualComparison.map((row) => (
              <div key={row.everydayItem} className="grid sm:grid-cols-2 gap-2 sm:gap-4 p-4 rounded-xl bg-white border border-indigo-100 text-sm">
                <span className="font-semibold">{row.everydayItem}</span>
                <span className="text-slate-600">{row.aiEquivalent}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 p-6 rounded-2xl bg-white border border-[#E2E8F0]">
          <div className="flex items-center gap-2 text-slate-500">
            <MessagesSquare className="w-5 h-5"/>
            <span className="text-xs font-bold uppercase tracking-wider">Overheard in a Tech Meeting</span>
          </div>
          <p className="mt-2 text-sm text-slate-500">{lesson.techConversation.context}</p>

          <div className="mt-4 space-y-3">
            {[lesson.techConversation.speakerA, lesson.techConversation.speakerB].map((speaker) => (
              <div key={speaker.role} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{speaker.role}</p>
                <p className="mt-1 text-base">&ldquo;{speaker.quote}&rdquo;</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 rounded-xl bg-emerald-50 text-emerald-900">
            <p className="text-xs font-bold uppercase tracking-wider">In Plain English</p>
            <p className="mt-1 text-base leading-relaxed">{lesson.techConversation.plainEnglishTranslation}</p>
          </div>
        </section>

        <section className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-slate-500">
              <Briefcase className="w-5 h-5"/>
              <span className="text-xs font-bold uppercase tracking-wider">Use It at Work</span>
            </div>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">{lesson.realWorldApplication.forWork}</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-slate-500">
              <GraduationCap className="w-5 h-5"/>
              <span className="text-xs font-bold uppercase tracking-wider">Use It to Learn</span>
            </div>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">{lesson.realWorldApplication.forLearning}</p>
          </div>
        </section>

        <section className="mt-6 p-6 rounded-2xl bg-[#0F172A] text-white">
          <div className="flex items-center gap-2 text-indigo-300">
            <BookMarked className="w-5 h-5"/>
            <span className="text-xs font-bold uppercase tracking-wider">Jargon Card</span>
          </div>
          <h2 className="mt-2 text-xl font-bold">{lesson.jargonCard.term}</h2>
          <p className="mt-2 text-base text-slate-300 leading-relaxed">{lesson.jargonCard.oneLineAnalogy}</p>
          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-indigo-300">Say This in Your Next Meeting</p>
          <p className="mt-1 text-base italic">{lesson.jargonCard.meetingDropLine}</p>
        </section>

        <section className="mt-6 p-6 rounded-2xl bg-white border border-[#E2E8F0]">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Check Your Intuition</p>
          <LessonQuiz lessonId={lesson.id} xpReward={lesson.xpReward} questions={lesson.quiz}/>
        </section>

        <nav className="mt-10 flex items-center justify-between gap-4 text-sm font-semibold">
          {prevLesson ? (
            <Link href={`/learn/${track.id}/${prevLesson.id}`} className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#0F172A]">
              <ArrowLeft className="w-4 h-4"/> {prevLesson.title}
            </Link>
          ) : <span/>}
          {nextLesson ? (
            <Link href={`/learn/${track.id}/${nextLesson.id}`} className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-[#4F46E5] text-white hover:bg-[#4338CA]">
              {nextLesson.title} <ArrowRight className="w-4 h-4"/>
            </Link>
          ) : (
            <Link href="/#curriculum" className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-[#4F46E5] text-white hover:bg-[#4338CA]">
              Track complete: back to Course Map <ArrowRight className="w-4 h-4"/>
            </Link>
          )}
        </nav>
      </main>
    </div>
  );
}
