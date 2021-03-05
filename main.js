var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function messageon() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    window.alert("Start talking");
  
    recognition.onresult = function (event) {

        console.log(event);

        var Content = event.results[0][0].transcript;

        document.getElementById("textbox").innerHTML = Content;
        console.log(Content);
    
    }
}

    function cam() {
        document.getElementById("textbox1").innerHTML = "";
        recognition.start();
        window.alert("Starting camera");
        recognition.onresult = function (event) {

            console.log(event);

            var Content = event.results[0][0].transcript;

            document.getElementById("textbox1").innerHTML = Content;
            console.log(Content);
            if (Content == "take my selfie") {
                console.log("taking selfie --- ");
                speak();
            }
        }
    }


    function speak() {
        var synth = window.speechSynthesis;

        speak_data = "Taking you Selfie in 5 seconds";

        var utterThis = new SpeechSynthesisUtterance(speak_data);

        synth.speak(utterThis);

        Webcam.attach(camera);

        setTimeout(function () {
            take_snapshot();
            save();
        }, 5000);
    }


    camera = document.getElementById("camera");
    Webcam.set({
        width: 360,
        height: 250,
        image_format: 'jpeg',
        jpeg_quality: 90
    });

    function take_snapshot() {
        Webcam.snap(function (data_uri) {
            document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
        });
    }


    function save() {
        link = document.getElementById("link");
        image = document.getElementById("selfie_image").src;
        link.href = image;
        link.click();
    }
    function send() {
        window.alert("Message sent");
        document.getElementById("textbox").innerHTML="";
    }
    function send1() {
        window.alert("Picture sent");
        document.getElementById("textbox1").innerHTML="";
    }