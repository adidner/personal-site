import React from 'react';
import Layout from '../../components/Layout';

function TikToks() {
    return (
        <Layout>
          <h1>TikToks</h1>
          <TikTokCard/>
        </Layout>
      );
}

export default TikToks;

function TikTokCard(){
  return (
    <div dangerouslySetInnerHTML={{__html:`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@gt.detailing/video/6936450269077064965" data-video-id="6936450269077064965" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@gt.detailing" href="https://www.tiktok.com/@gt.detailing">@gt.detailing</a> <p>Disaster detail <a title="detailing" target="_blank" href="https://www.tiktok.com/tag/detailing">#detailing</a> <a title="like" target="_blank" href="https://www.tiktok.com/tag/like">#like</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp">#fyp</a> <a title="clean" target="_blank" href="https://www.tiktok.com/tag/clean">#clean</a></p> <a target="_blank" title="♬ original sound - Gabe Tyler" href="https://www.tiktok.com/music/original-sound-6936450079222024966">♬ original sound - Gabe Tyler</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`}}/>
  );
}