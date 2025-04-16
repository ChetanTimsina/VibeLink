const createMovieSection = (apiUrl, containerSelector) => {
  const container = document.querySelector(containerSelector);

  fetch(apiUrl, options)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("card", "mb-4");
        card.style.maxWidth = "720px";

        fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos`, options)
          .then((res) => res.json())
          .then((videoData) => {
            const trailer = videoData.results.find(
              (v) => v.type === "Trailer" && v.site === "YouTube"
            );

            card.innerHTML = `
              <div class="card-body">
                <section class="post-top d-flex aic justify-content-between gap-2" style="width: 100%">
                  <div class="d-flex aic gap-2">
                    <div id="post-icon" class="adjustForImage"></div>
                    <div class="post-title d-flex flex-column">
                      <p class="card-title"><b>${movie.title}</b></p>
                    </div>
                  </div>
                  <div class="d-flex gap-4">
                    <section class="more-icon adjustForImage"></section>
                    <section class="wrong-icon adjustForImage"></section>
                  </div>
                </section>
                <p class="card-text">${
                  movie.overview ||
                  "No overview 😶 Levon Cade left behind a decorated military career in the black ops to live a simple life working construction. But when his boss's daughter, who is like family to him, is taken by human traffickers, his search to bring her home uncovers a world of corruption far greater than he ever could have imagined."
                }</p>
                ${
                  trailer
                    ? `<div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/${trailer.key}" 
                          title="${movie.title} trailer" allowfullscreen></iframe>
                      </div>`
                    : `<p>No trailer available 🫠</p>`
                }
            <hr />
            <div class="d-flex aic justify-content-between gap-5">
              <section class="post-bottom-icon-container">
                <div class="post-bottom-icon adjustForImage" id="react"></div>
                <p>Like</p>
              </section>
              <section class="post-bottom-icon-container">
                <div class="post-bottom-icon adjustForImage" id="comment"></div>
                <p>Comment</p>
              </section>
              <section class="post-bottom-icon-container">
                <div class="post-bottom-icon adjustForImage" id="share"></div>
                <p>Share</p>
              </section>
            </div>
              </div>
            `;
            container.appendChild(card);
          });
      });
    })
    .catch((err) => {
      console.error("💀 Error fetching movies:", err);
      container.innerHTML = "<p>Failed to load content. TMDB said nah 💔</p>";
    });
};

createMovieSection(
  "https://api.themoviedb.org/3/trending/movie/day",
  ".box-main"
);
createMovieSection(
  "https://api.themoviedb.org/3/trending/all/day",
  ".box-main-1"
);
createMovieSection(
  "https://api.themoviedb.org/3/trending/tv/day",
  ".box-main-2"
);
createMovieSection(
  "https://api.themoviedb.org/3/trending/movie/day",
  ".box-main-3"
);
createMovieSection(
  "https://api.themoviedb.org/3/trending/movie/day",
  ".box-main-4"
);
