    const now = new Date();
    const formattedDate = now.toLocaleDateString("vi-VN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    document.getElementById("current-date").textContent = formattedDate;


    const videos = [
      { title: "Video 1", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Video 2", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Video 3", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Video 4", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Video 5", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Video 6", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Video 7", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Video 8", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Video 9", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Video 10", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      // Thêm bao nhiêu cũng được
    ];
  
    const videosPerPage = 4;
    let currentPage = 0;
  
    const videoGrid = document.getElementById("video-grid");
    const paginationDots = document.getElementById("pagination-dots");
  
    function renderVideos(page) {
      videoGrid.innerHTML = ""; // clear
  
      const start = page * videosPerPage;
      const end = start + videosPerPage;
      const currentVideos = videos.slice(start, end);
  
      currentVideos.forEach((video) => {
        const videoItem = document.createElement("div");
        videoItem.className = "video-item";
        videoItem.innerHTML = `
          <iframe src="${video.src}" frameborder="0" allowfullscreen></iframe>
          <div class="video-overlay"><h2>${video.title}</h2></div>
        `;
        videoGrid.appendChild(videoItem);
      });
  
      renderPaginationDots();
    }
  
    function renderPaginationDots() {
      paginationDots.innerHTML = ""; // clear
      const totalPages = Math.ceil(videos.length / videosPerPage);
  
      for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        if (i === currentPage) dot.classList.add("active");
        dot.addEventListener("click", () => {
          currentPage = i;
          renderVideos(currentPage);
        });
        paginationDots.appendChild(dot);
      }
    }
  
    renderVideos(currentPage);
  
