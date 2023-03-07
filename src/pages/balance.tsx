import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Chicken, Hambugar } from "../asset/image/balance";

const Balance = () => {
  const router = useRouter();

  const [decibel, setDecibel] = useState(0);
  const [recognition, setRecognition] = useState(null);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    const newRecognition = new window.webkitSpeechRecognition();
    newRecognition.interimResults = true;
    newRecognition.continuous = true;
    newRecognition.lang = "ko-KR";

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
    if (transcript === "치킨") {
      router.push("/login");
    }
  });

  return (
    <>
      <div className="items-center justify-center">
        <div className="flex-1">
          <div className="text-lg cursor-pointer" onClick={startRecognition}>
            start
          </div>

          {/* container */}
          <div className="py-6 space-y-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
            <p>Transcript: {transcript}</p>
            <p>Decibel: {decibel}</p>
          </div>
        </div>

        <div className="flex items-center justify-center my-20 ">
          <p className="text-6xl text-primary">치킨 vs 햄버거</p>
          <p className="text-sm text-primary">
            (개발자와 취향이 다른경우 홈페이지 입장불가.)
          </p>
        </div>

        <div className="flex items-center justify-center space-x-6">
          <div className="bg-white">
            <Image className="w-[400px] h-[400px]" src={Chicken} alt="치킨" />
          </div>
          <div>
            <Image
              className="w-[400px] h-[400px]"
              src={Hambugar}
              alt="햄버거"
            />
          </div>
        </div>

        <div className="ml-[600px] pt-[130px]">
          {transcript === "치킨" ? (
            <p> 1차 로그인 성공~</p>
          ) : transcript === "햄버거" ? (
            <p className="text-3xl text-primary">
              개발자와 취향이 다릅니다. 로그인 실패.
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Balance;
