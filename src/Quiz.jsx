// import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

import { Button } from "./components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import React, { useState, useEffect } from "react";

const signs = [
  {
    english: "TWO WAY TRAFFIC AHEAD",
    vietnamese: "Đường 2 chiều phía trước",
    image: 1,
    x: -100,
    y: 0,
  },
  {
    english: "NO TURN ON RED",
    vietnamese: "Không rẽ khi đèn đỏ",
    image: 1,
    x: -500,
    y: 0,
  },
  {
    english: "LEFT TURN YIELD ON GREEN",
    vietnamese: "Rẽ trái khi đèn xanh",
    image: 1,
    x: -850,
    y: 0,
  },
  {
    english: "SPEED LIMIT 50",
    vietnamese: "Giới hạn tốc độ",
    image: 1,
    x: -1250,
    y: 0,
  },
  {
    english: "TURNING TRAFFIC MUST YIELD TO PEDESTRIANS",
    vietnamese: "Nhường đường cho bộ hành",
    image: 1,
    x: -1600,
    y: 0,
  },
  {
    english: "PUSH BUTTON FOR WALK SIGNAL",
    vietnamese: "Nhấn nút để đi bộ",
    image: 1,
    x: -1970,
    y: 0,
  },
  {
    english: "RAILROAD CROSSING",
    vietnamese: "Đường sắt cắt ngang",
    image: 1,
    x: -2300,
    y: 0,
  },
  {
    english: "NO U TURN",
    vietnamese: "Chỉ rẽ trái, Cấm quay đầu xe",
    image: 1,
    x: -100,
    y: -701,
  },
  {
    english: "LEFT OR U TURN",
    vietnamese: "Chỉ rẽ trái hoặc quay đầu",
    image: 1,
    x: -500,
    y: -701,
  },
  {
    english: "CENTER OR LEFT TURN LANE",
    vietnamese: "Chỉ rẽ phải",
    image: 1,
    x: -850,
    y: -701,
  },
  {
    english: "NO TURNS",
    vietnamese: "Không được rẽ",
    image: 1,
    x: -1250,
    y: -701,
  },
  {
    english: "RIGHT LANE MUST TURN RIGHT",
    vietnamese: "Phải rẽ phải",
    image: 1,
    x: -1600,
    y: -701,
  },
  {
    english: "SLOWER TRAFFIC USE TURNOUTS",
    vietnamese: "Xe chạy chậm phải dùng lối ra",
    image: 1,
    x: -1970,
    y: -701,
  },
  {
    english: "EMERGENCY PARKING ONLY",
    vietnamese: "Chỉ đậu xe khẩn cấp",
    image: 1,
    x: -2300,
    y: -701,
  },
  {
    english: "YIELD TO UPHILL TRAFFIC",
    vietnamese: "Ưu tiên cho xe lên dốc",
    image: 1,
    x: -100,
    y: -1200,
  },
  {
    english: "RIGHT LANE MUST EXIT",
    vietnamese: "Làn đường bên phải buộc phải đi ra",
    image: 1,
    x: -500,
    y: -1301,
  },
  {
    english: "TURNOUT 1/4 MILE",
    vietnamese: "Đường thoát trong 1/4 dặm ",
    image: 1,
    x: -850,
    y: -1301,
  },
  {
    english: "BIKE LANE",
    vietnamese: "Làn xe đạp",
    image: 1,
    x: -1250,
    y: -1301,
  },
  {
    english: "BUS CARPOOL LANE AHEAD",
    vietnamese: "Làn đường ưu tiên cho xe buýt",
    image: 1,
    x: -1600,
    y: -1301,
  },
  {
    english: "CARPOOL VIOLATION",
    vietnamese: "Vi phạm làn xe dành cho nhiều người",
    image: 1,
    x: -1970,
    y: -1301,
  },
  {
    english: "ONE WAY",
    vietnamese: "Một chiều",
    image: 1,
    x: -2300,
    y: -1301,
  },
  {
    english: "ROAD WORK AHEAD",
    vietnamese: "Công trình đang thi công",
    image: 1,
    x: -100,
    y: -1900,
  },
  {
    english: "ROAD CLOSED AHEAD",
    vietnamese: "Đóng cửa",
    image: 1,
    x: -500,
    y: -1900,
  },
  {
    english: "NO SHOULDER",
    vietnamese: "Không có lề đường",
    image: 1,
    x: -850,
    y: -1900,
  },
  {
    english: "ONE LANE ROAD AHEAD",
    vietnamese: "Làn đường phía trước",
    image: 1,
    x: -1250,
    y: -1900,
  },
  {
    english: "LANE CLOSED",
    vietnamese: "Làn đường đóng cửa",
    image: 1,
    x: -1600,
    y: -1900,
  },
  {
    english: "LOOSE GRAVEL",
    vietnamese: "Đá sỏi",
    image: 1,
    x: -1970,
    y: -1900,
  },
  {
    english: "SHOULDER WORK AHEAD",
    vietnamese: "Công trình phía trước",
    image: 1,
    x: -2300,
    y: -1900,
  },
  {
    english: "WORKERS",
    vietnamese: "Công nhân đang làm",
    image: 1,
    x: -100,
    y: -2450,
  },
  {
    english: "RAMP CLOSED",
    vietnamese: "Đóng cửa đường",
    image: 1,
    x: -500,
    y: -2450,
  },
  {
    english: "FLAGMAN AHEAD",
    vietnamese: "Người cầm cờ",
    image: 1,
    x: -850,
    y: -2450,
  },
  {
    english: "SLOW MOVING VEHICLE",
    vietnamese: "Xe chạy chậm",
    image: 1,
    x: -1250,
    y: -2450,
  },
  {
    english: "USE NEXT EXIT",
    vietnamese: "Lối ra tiếp theo",
    image: 1,
    x: -1600,
    y: -2450,
  },
  {
    english: "ROAD WORK NEXT 5 MILES",
    vietnamese: "Làm đường phía trước",
    image: 1,
    x: -1970,
    y: -2450,
  },
  { english: "DETOUR", vietnamese: "Đường vòng", image: 1, x: -2300, y: -2450 },

  { english: "TROLLEY", vietnamese: "Xe điện", image: 1, x: -100, y: -3299 },
  { english: "AIRPORT", vietnamese: "Sân bay", image: 1, x: -500, y: -3299 },
  { english: "EXIT", vietnamese: "Lối ra", image: 1, x: -1600, y: -3299 },
  {
    english: "BIKE ROUTE",
    vietnamese: "Tuyến đường xe đạp",
    image: 1,
    x: -1970,
    y: -3299,
  },
  {
    english: "DIVIDER ROAD 2 MILES AHEAD",
    vietnamese: "Đường chia 2 đoạn",
    image: 1,
    x: -2300,
    y: -3299,
  },

  {
    english: "PARK & RIDE",
    vietnamese: "Công viên và xe",
    image: 1,
    x: -100,
    y: -3840,
  },
  { english: "DISABLED", vietnamese: "Tàn tật", image: 1, x: -450, y: -3940 },
  {
    english: "TELEPHONE",
    vietnamese: "Điện thoại",
    image: 1,
    x: -850,
    y: -3940,
  },
  {
    english: "ELECTRIC VEHICLE CHARGING STATION",
    vietnamese: "Trạm sạc xe điện",
    image: 1,
    x: -1250,
    y: -3940,
  },
  {
    english: "REST AREA 1 MILE",
    vietnamese: "Khu vực nghỉ ngơi",
    image: 1,
    x: -1600,
    y: -3940,
  },
  {
    english: "HOSPITAL",
    vietnamese: "Bệnh viện",
    image: 1,
    x: -1970,
    y: -3940,
  },
  {
    english: "CAMPING",
    vietnamese: "Khu vực cắm trại",
    image: 1,
    x: -2300,
    y: -3940,
  },

  {
    english: "FEWER LANES AHEAD",
    vietnamese: "Làn đường bị hẹp",
    x: -100,
    y: 0,
    image: 2,
  },
  { english: "CROSSROAD", vietnamese: "Giao lộ", x: -500, y: 0, image: 2 },
  {
    english: "DIVIDED HIGHWAY",
    vietnamese: "Đường cao tốc phân luồng",
    x: -950,
    y: 0,
    image: 2,
  },
  {
    english: "TWO WAY TRAFFIC",
    vietnamese: "Đường hai chiều",
    x: -1201,
    y: 0,
    image: 2,
  },
  {
    english: "END FREEWAY",
    vietnamese: "Kết thúc cao tốc",
    x: -1580,
    y: 0,
    image: 2,
  },
  {
    english: "WINDING ROAD",
    vietnamese: "Đường quanh co",
    x: -2000,
    y: 0,
    image: 2,
  },
  { english: "RIGHT TURN", vietnamese: "Rẽ phải", x: -2400, y: 0, image: 2 },

  {
    english: "STOP AHEAD",
    vietnamese: "Dừng phía trước",
    x: -100,
    y: -550,
    image: 2,
  },
  {
    english: "YIELD AHEAD",
    vietnamese: "Nhường đường phía trước",
    x: -500,
    y: -550,
    image: 2,
  },
  {
    english: "RAILROAD CROSSING",
    vietnamese: "Giao nhau với đường sắt",
    x: -850,
    y: -550,
    image: 2,
  },
  { english: "TRACKS", vietnamese: "Đường ray", x: -1200, y: -550, image: 2 },
  {
    english: "SLIPPERY ROAD",
    vietnamese: "Đường trơn trượt",
    x: -1580,
    y: -550,
    image: 2,
  },
  {
    english: "NO PASSING ZONE",
    vietnamese: "Khu vực cấm vượt",
    x: -2000,
    y: -550,
    image: 2,
  },
  {
    english: "MERGING LANE",
    vietnamese: "Làn đường nhập",
    x: -2360,
    y: -550,
    image: 2,
  },

  {
    english: "THRU TRAFFIC MERGE LEFT",
    vietnamese: "Hợp nhất giao thông bên trái",
    x: -100,
    y: -1000,
    image: 2,
  },
  {
    english: "LANE ENDS MERGE LEFT",
    vietnamese: "Kết thúc làn, nhập trái",
    x: -500,
    y: -1000,
    image: 2,
  },
  {
    english: "TRAFFIC SIGNAL",
    vietnamese: "Đèn giao thông",
    x: -950,
    y: -1000,
    image: 2,
  },
  {
    english: "BICYCLE TRAFFIC",
    vietnamese: "Giao thông xe đạp",
    x: -1201,
    y: -1000,
    image: 2,
  },
  {
    english: "SCHOOL BUS STOP AHEAD",
    vietnamese: "Trạm xe buýt trường học phía trước",
    x: -1580,
    y: -1000,
    image: 2,
  },
  {
    english: "PEDESTRIAN TRAFFIC",
    vietnamese: "Giao thông người đi bộ",
    x: -2001,
    y: -1000,
    image: 2,
  },
  {
    english: "ROAD NARROWS",
    vietnamese: "Đường hẹp",
    x: -2360,
    y: -1000,
    image: 2,
  },

  {
    english: "PAVEMENT ENDS",
    vietnamese: "Hết vỉa hè",
    x: -100,
    y: -1490,
    image: 2,
  },
  {
    english: "SOFT SHOULDER",
    vietnamese: "Lề đường nhỏ",
    x: -500,
    y: -1490,
    image: 2,
  },
  {
    english: "SLIDE AREA",
    vietnamese: "Khu vực trượt lở",
    x: -850,
    y: -1490,
    image: 2,
  },
  {
    english: "NARROW BRIDGE",
    vietnamese: "Cầu hẹp",
    x: -1201,
    y: -1490,
    image: 2,
  },
  { english: "FLOODED", vietnamese: "Lũ ngập", x: -1580, y: -1490, image: 2 },
  {
    english: "CROSS TRAFFIC AHEAD",
    vietnamese: "Giao thông phía trước",
    x: -2001,
    y: -1490,
    image: 2,
  },
  {
    english: "ROUGH ROAD",
    vietnamese: "Đường xấu",
    x: -2360,
    y: -1490,
    image: 2,
  },

  {
    english: "STEEP GRADE",
    vietnamese: "Dốc cao",
    x: -100,
    y: -2040,
    image: 2,
  },
  {
    english: "SCHOOL CROSSING",
    vietnamese: "Khu vực trường học",
    x: -500,
    y: -2040,
    image: 2,
  },
  {
    english: "DIRECTIONAL ARROW",
    vietnamese: "Mũi tên chỉ hướng",
    x: -850,
    y: -2040,
    image: 2,
  },
  {
    english: "TRUCK ROLLOVER REDUCE SPEED",
    vietnamese: "Xe tải giảm tốc độ",
    x: -1201,
    y: -2040,
    image: 2,
  },
  {
    english: "SHARP TURN",
    vietnamese: "Quẹo gấp",
    x: -1580,
    y: -2040,
    image: 2,
  },
  {
    english: "T-INTERSECTION",
    vietnamese: "Giao lộ chữ T",
    x: -2001,
    y: -2040,
    image: 2,
  },
  {
    english: "SIGNAL AHEAD",
    vietnamese: "Đèn tín hiệu phía trước",
    x: -2360,
    y: -2040,
    image: 2,
  },

  { english: "STOP", vietnamese: "Dừng", x: -100, y: -2700, image: 2 },
  { english: "YIELD", vietnamese: "Nhường đường", x: -500, y: -2700, image: 2 },
  {
    english: "WRONG WAY",
    vietnamese: "Sai chiều",
    x: -850,
    y: -2700,
    image: 2,
  },
  {
    english: "DO NOT ENTER",
    vietnamese: "Không được vào",
    x: -1201,
    y: -2700,
    image: 2,
  },
  {
    english: "NO LEFT TURN",
    vietnamese: "Cấm rẽ trái",
    x: -1580,
    y: -2700,
    image: 2,
  },
  {
    english: "NO PARKING",
    vietnamese: "Cấm đỗ xe",
    x: -2001,
    y: -2700,
    image: 2,
  },
  {
    english: "NO U-TURN",
    vietnamese: "Cấm quay đầu",
    x: -2360,
    y: -2700,
    image: 2,
  },

  {
    english: "NO PARKING ANY TIME",
    vietnamese: "Cấm đậu xe mọi lúc",
    x: -100,
    y: -3199,
    image: 2,
  },
  {
    english: "DO NOT PASS",
    vietnamese: "Cấm vượt",
    x: -500,
    y: -3199,
    image: 2,
  },
  {
    english: "RIGHT TURN ONLY",
    vietnamese: "Chỉ được rẽ phải",
    x: -850,
    y: -3199,
    image: 2,
  },
  {
    english: "KEEP RIGHT",
    vietnamese: "Đi bên phải",
    x: -1201,
    y: -3199,
    image: 2,
  },
  {
    english: "KEEP LEFT",
    vietnamese: "Đi bên trái",
    x: -1580,
    y: -3199,
    image: 2,
  },
  {
    english: "TWO WAY LEFT TURN",
    vietnamese: "Rẽ trái hai chiều",
    x: -2001,
    y: -3199,
    image: 2,
  },
  {
    english: "SLOWER TRAFFIC KEEP RIGHT",
    vietnamese: "Xe chậm đi bên phải",
    x: -2360,
    y: -3199,
    image: 2,
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getRandomAnswers = () => {
    const correctAnswer = signs[currentQuestion].vietnamese;
    const otherAnswers = signs
      .filter((sign) => sign.vietnamese !== correctAnswer)
      .map((sign) => sign.vietnamese);
    const shuffledOtherAnswers = shuffleArray(otherAnswers).slice(0, 3);
    return shuffleArray([...shuffledOtherAnswers, correctAnswer]);
  };

  const [answerOptions, setAnswerOptions] = useState([]);

  useEffect(() => {
    setAnswerOptions(getRandomAnswers());
  }, [currentQuestion]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === signs[currentQuestion].vietnamese;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
  };

  const nextQuestion = () => {
    if (currentQuestion < signs.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setIsCorrect(null);
    } else {
      alert(`Hoàn thành! Điểm số của bạn: ${score}/${signs.length}`);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Road Sign Quiz</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-center">
          <div
            className="w-96 h-96 overflow-hidden"
            style={{
              backgroundImage: `url(/road-signs-image-${signs[currentQuestion].image}.jpg)`,
              backgroundPosition: `${signs[currentQuestion].x}px ${signs[currentQuestion].y}px`,
              backgroundSize: "auto",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <p className="mb-2">Biển Báo này muốn nói gì?</p>
        <p className="font-bold mb-4">{signs[currentQuestion].english}</p>
        <div className="space-y-2">
          {answerOptions.map((answer, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(answer)}
              variant={
                selectedAnswer === answer
                  ? isCorrect
                    ? "success"
                    : "destructive"
                  : "outline"
              }
              className="w-full justify-start"
              disabled={isCorrect !== null}
            >
              {answer}
            </Button>
          ))}
        </div>
        {isCorrect !== null && (
          <div
            className={`mt-4 p-2 ${
              isCorrect ? "bg-green-100" : "bg-red-100"
            } rounded-md flex items-center`}
          >
            {isCorrect ? (
              <CheckCircle2 className="text-green-500 mr-2" />
            ) : (
              <AlertCircle className="text-red-500 mr-2" />
            )}
            <p>
              {isCorrect
                ? "Đúng!"
                : `Sai. Câu trả lời đúng là: ${signs[currentQuestion].vietnamese}`}
            </p>
          </div>
        )}
        <Button
          onClick={nextQuestion}
          className="mt-4 w-full"
          disabled={selectedAnswer === ""}
        >
          Tiếp
        </Button>
        <p className="mt-4 text-right">
          Score: {score}/{currentQuestion + 1}
        </p>
      </CardContent>
    </Card>
  );
};

export default Quiz;
