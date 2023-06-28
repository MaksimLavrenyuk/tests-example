import { cypressStringifyChromeRecording } from '@cypress/chrome-recorder';
import recordingContent from './recordingContent.json' assert { type: "json" };

const stringifiedContent = await cypressStringifyChromeRecording(
    recordingContent
);


console.log(stringifiedContent);
