function uploadVideo() {
    const videoUpload = document.getElementById("video-upload").files[0];
    const formData = new FormData();
    formData.append("file", videoUpload);

    fetch("http://127.0.0.1:8000/upload/", {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("upload-status").textContent = data.info;
        document.getElementById("video-preview").src = URL.createObjectURL(videoUpload);
    })
    .catch(error => {
        document.getElementById("upload-status").textContent = "Error uploading video";
        console.error("Error:", error);
    });
}

function trimVideo() {
    const startTime = document.getElementById("start-time").value;
    const endTime = document.getElementById("end-time").value;
    const fileName = document.getElementById("video-upload").files[0].name;

    const data = {
        start_time: parseFloat(startTime),
        end_time: parseFloat(endTime),
        file_name: fileName,
    };

    fetch("http://127.0.0.1:8000/trim/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("trim-status").textContent = data.info;
        document.getElementById("video-preview").src = "http://127.0.0.1:8000/videos/trimmed_" + fileName;
    })
    .catch(error => {
        document.getElementById("trim-status").textContent = "Error trimming video";
        console.error("Error:", error);
    });
}

