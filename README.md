# ClipPipeline
ClipPipeline is a web-based video editor that simplifies trimming and editing. Built with FastAPI and FFmpeg, it allows users to easily upload and manipulate video clips. Ideal for content creators and educators, ClipPipeline offers fast and reliable editing solutions with an intuitive interface.

## Overview

**ClipPipeline** is a web-based video editor that allows users to upload and trim video clips effortlessly. It provides a simple yet powerful interface for editing videos using FastAPI and FFmpeg.

## Features

- **Upload Videos**: Easily upload your video files for editing.
- **Trim Videos**: Specify start and end times to cut video segments.
- **User-Friendly Interface**: Designed with an intuitive frontend for smooth user experience.
- **Fast Processing**: Efficient backend processing using FastAPI and FFmpeg.
- **Multi-Format Support**: Works with various video formats for maximum flexibility.

## Technologies Used

- **Backend**: FastAPI
- **Frontend**: HTML, CSS, JavaScript
- **Video Processing**: FFmpeg
- **Containerization**: Docker
- **Deployment**: Docker Hub and AWS EC2 (Optional)

## Installation

### Prerequisites

- Python 3.9 or higher
- Docker
- Docker Compose

### Clone the Repository

```bash
git clone https://github.com/your-username/ClipPipeline.git
cd ClipPipeline

### Setup and Run
    Build the Docker containers:
    docker-compose up --build
    Access the application at http://localhost:80 for the frontend or http://localhost:8000/docs for the API documentation.


