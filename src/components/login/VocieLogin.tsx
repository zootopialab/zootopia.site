import { XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDialog } from "../useDialog/useDialog";

const VocieLogin = () => {
  const { setSidebarOpen } = useDialog();
  const router = useRouter();

  const [decibel, setDecibel] = useState<any>(0);
  const [recognition, setRecognition] = useState(null);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    // @ts-ignore
    const newRecognition = new window.webkitSpeechRecognition();
    newRecognition.interimResults = true;
    newRecognition.continuous = true;
    newRecognition.lang = "ko-KR";

    console.log("asdf");
    newRecognition.onresult = (event) => {
      const interimTranscript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
      setTranscript(interimTranscript);
    };

    newRecognition.onstart = (event) => {
      console.log("on start" + new Date());
    };

    newRecognition.onend = (event) => {
      console.log("on end" + new Date());
      newRecognition.start();
    };

    setRecognition(newRecognition);
  }, []);

  const handleClick = () => {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const getDecibel = () => {
      requestAnimationFrame(getDecibel);
      analyser.getByteFrequencyData(dataArray);

      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
      }
      const rms = Math.sqrt(sum / bufferLength);
      const decibel = (20 * Math.log10(rms)).toFixed(0);
      setDecibel(decibel);
    };

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      getDecibel();
    });

    if (audioContext) {
      audioContext.resume().then(() => {
        console.log("AudioContext is resumed.");
      });
    }
  };

  const startRecognition = () => {
    if (recognition) {
      recognition.start();
      handleClick();
    }
  };

  useEffect(() => {
    if (decibel > 20) {
      router.push("/main");
      setSidebarOpen(false);
    }
  });

  const stopRecognition = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  return (
    <>
      <div className="flex flex-col h-full overflow-y-auto bg-white shadow-[0_25px_25px_-5px_rgba(0,0,0,.4)]">
        <div className="flex-1">
          {/* Header */}
          <div className="flex justify-between mx-auto my-3 mr-3 text-lg font-bold border-b-2 border-gray-100 ">
            <p className="px-4 my-3 text-lg font-bold sm:px-6">음성 로그인</p>
          </div>
          <XIcon
            className="w-5 h-5 mt-3 mr-3 text-gray-400 cursor-pointer hover:text-gray-500"
            onClick={() => {
              setSidebarOpen(false);
            }}
          />

          <div className="text-lg cursor-pointer" onClick={startRecognition}>
            start
          </div>

          <div className="text-lg cursor-pointer" onClick={stopRecognition}>
            stop
          </div>

          {/* container */}
          <div className="py-6 space-y-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
            <p>Transcript: {transcript}</p>
            <p>Decibel: {decibel}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VocieLogin;
