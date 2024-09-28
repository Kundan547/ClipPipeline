from fastapi import FastAPI, UploadFile, File, HTTPException
from moviepy.editor import VideoFileClip
import os

app = FastAPI()

UPLOAD_FOLDER = "videos/"

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Endpoint to upload video
@app.post("/upload/")
async def upload_video(file: UploadFile = File(...)):
    file_location = f"{UPLOAD_FOLDER}{file.filename}"
    with open(file_location, "wb+") as file_object:
        file_object.write(file.file.read())
    return {"info": f"file '{file.filename}' saved at '{file_location}'"}

# Endpoint to trim video
@app.post("/trim/")
async def trim_video(start_time: float, end_time: float, file_name: str):
    video_path = f"{UPLOAD_FOLDER}{file_name}"
    if not os.path.exists(video_path):
        raise HTTPException(status_code=404, detail="File not found")

    video = VideoFileClip(video_path).subclip(start_time, end_time)
    trimmed_video_path = f"{UPLOAD_FOLDER}trimmed_{file_name}"
    video.write_videofile(trimmed_video_path, codec="libx264")
    return {"info": f"Trimmed video saved at '{trimmed_video_path}'"}

