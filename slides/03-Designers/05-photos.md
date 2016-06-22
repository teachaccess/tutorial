---
title: Photos & Videos
chapter: Design Principles
---
While alt-text can make a static photo or graphic accessible to screen reader users, when an image is dynamic (e.g., animated GIF or video) and contains audio, additional support is required for users who are blind or deaf.

<img src='./images/captions.png', alt='Captions displayed over video screen shot' />

When providing video, via either an embedded or standalone video player, the controls of that player need to be operable by a keyboard-only user (i.e., without a mouse). Controls such as play, pause, fast forward, rewind and scrub bars and closed caption buttons all need to be labeled properly and available to a screen reader user in the same way any web page is made accessible.

"Audio description" (also known as "video description") provides an added narrative track that describes key visual elements of a animation or video or movie. Timed to be heard during pauses in dialog, descriptions can be recorded and synchronized with the video or made available as text to be read by a screen reader. With HTML5 video players and the video and track elements, audio descriptions can even be heard while a video is automatically paused. For more on how to deliver descriptions, see the following resources:
- http://webaim.org/techniques/captions/
- https://www.w3.org/WAI/GL/wiki/Using_the_track_element_to_provide_audio_descriptions
- http://www.ssbbartgroup.com/blog/cvaa-video-programming-requirements-video-description/

Closed captioning involves the addition of text to synchronized to a video's audio by either embedding caption data in your video or adding a "sidecar" closed caption file to your server. There are a variety of caption formats used by content providers as well as tools for creating captions. Many vendors are available to provide captions in the format that works for your video player's needs. Resources for captioning media:
- http://webaim.org/techniques/captions/
- http://info.3playmedia.com/wp-best-practices.html
