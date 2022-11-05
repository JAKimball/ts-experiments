# VS Code Video Capture

## Learnings

- Recordings with included audio are capturing the full desktop (with all screens) because of the mixed-up ordering of the ffmpeg parameters that Chronicler is using - fix that and it works fine.
- We can quickly use ffmpeg command line to combine video and audio files:
  - see <https://ffmpeg.org/pipermail/ffmpeg-user/2015-January/025079.html>

```ps
ffmpeg -i video.mp4 -i audio.m4a -c copy -map 0:v -map 1:a output.mp4
```

- Video files with more involved graphics (fractals) will be MUCH larger (order of magnitude!)
- GPU bound processes still cause significant frame loss after setting "high" ffmpeg priority but CPU bound processes not so much
  - Try setting the priority 1st thing after starting the recording - be ready with the details tab of task manager up before starting
- Google recorder currently has a bug that is requiring that you turn off "backup and sync", terminate the app, restart the app, then turn back on "backup and sync", before a new recording will be uploaded!
  - Try turning off "backup and sync" before recording then turn it on. If this works then I would suspect a race condition between saving a completed recording locally and the backup process.
    - Above did not work! Still had to terminate app and restart app before backup would commence!
- We can set VS Code window dimensions as follows:
  - Open DevTools for the VS Code window with `Ctrl+Shift+I`
    - Note: You may need to un-dock the DevTools window (in three-dot menu)
  - Enter the following line in the console:

```js
window.resizeTo(1920,1080); window.moveTo(0,0)
```

- Show where the window is with this line:

```js
with (window) console.log(`X: ${screenLeft} Y: ${screenTop} Width: ${outerWidth} Height: ${outerHeight}`)
```
