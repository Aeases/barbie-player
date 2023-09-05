import Head from "next/head";
import { useState } from "react";
import PlayButton from "y/components/PlayButton";
export default function Home() {
  const [audioPlaying, setAudioPlaying] = useState(true)
  function playAudio() {
    const audio_reference = document.querySelector("#audio_id")
    if (audio_reference instanceof HTMLAudioElement) {
      audioPlaying ? void audio_reference.play() : audio_reference.pause()
      setAudioPlaying(!audioPlaying)
      console.log(audio_reference)
      console.log(audioPlaying)
      
    }  
  }

  function restartAudio() {
    const audio_reference = document.querySelector("#audio_id")
    if (audio_reference instanceof HTMLAudioElement) {
      //audio_reference.pause()
      audio_reference.currentTime = 0
      setAudioPlaying(true)
      audio_reference.pause()
    }
  }
  
  return (
    <>
      <Head>
        <title>...</title>
        <meta name="description" content="Days until the end of school, forever." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[--background-primary-obsidian]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:gap-16 ">
            <div
              className="flex flex-col gap-4 rounded-xl border-style scale-[200%] p-2 w-full max-h-lg md:max-w-xl" onClick={playAudio}>
              <h3 className="text-2xl font-bold text-fuchsia-500"> <PlayButton classname="transition-all" isPlaying={audioPlaying} /> </h3>
              <audio src="icons/barbie.mp3" id="audio_id"className="hidden">
                <a href="AudioTest.ogg">Download OGG audio</a>.
              </audio>
            </div>
            <div
              className="flex flex-col gap-4 rounded-xl border-style scale-[200%] p-2 w-full max-h-lg md:max-w-xl" onClick={restartAudio}>
              <h3 className="text-2xl font-bold text-white"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              </h3>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
