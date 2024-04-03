import React from "react";
import { Metadata } from "next";
import releases from "./releases.json";
import styles from "./ReleasesPage.module.css";

export const metadata: Metadata = {
  title: "Recordings by Gavin Rough",
};

const ReleasesPage = () => {
  return (
    <div className={styles.container}>
      {releases.map((release) => (
        <article
          key={release.title}
          id={release.slug}
          className={styles.releaseItem}
        >
          <figure className={styles.figure}>
            <img
              src={`/recordings/images/${encodeURIComponent(release.image)}`}
              alt={release.title}
              className={styles.imgResponsive}
            />
          </figure>
          {release.recordings.map((recording) => (
            <div key={recording.title} className={styles.audioPlayer}>
              <h2 className={styles.title}>{recording.title}</h2>
              <div className={styles.audioPlayerControlWrapper}>
                <audio
                  className={styles.audioPlayerControls}
                  src={`/recordings/sounds/${encodeURIComponent(
                    recording.audio
                  )}`}
                  controls
                ></audio>
              </div>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
};

export default ReleasesPage;
