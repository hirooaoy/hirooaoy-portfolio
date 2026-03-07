const GLITCH_CHARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789";

type StartGlitchAnimationOptions = {
  target: string;
  durationMs: number;
  frameDurationMs?: number;
  onUpdate: (value: string) => void;
  characterSet?: string;
};

export const scrambleText = (
  target: string,
  progress: number,
  characterSet: string = GLITCH_CHARACTERS,
) => {
  const lockedCharacters = Math.floor(target.length * progress);

  return target
    .split("")
    .map((char, index) => {
      if (/\s/.test(char)) {
        return char;
      }

      if (index < lockedCharacters) {
        return target[index];
      }

      const randomIndex = Math.floor(Math.random() * characterSet.length);
      return characterSet[randomIndex];
    })
    .join("");
};


export const startGlitchAnimation = ({
  target,
  durationMs,
  frameDurationMs = 45,
  onUpdate,
  characterSet,
}: StartGlitchAnimationOptions) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    onUpdate(target);
    return () => {};
  }

  const totalFrames = Math.ceil(durationMs / frameDurationMs);
  const initialProgress = Math.min(1, 1 / Math.max(1, totalFrames));
  let currentFrame = 1;
  let intervalId: number | undefined;

  const startId = window.setTimeout(() => {
    onUpdate(scrambleText(target, initialProgress, characterSet));

    intervalId = window.setInterval(() => {
      currentFrame += 1;
      const progress = Math.min(1, currentFrame / totalFrames);

      if (progress >= 1) {
        onUpdate(target);
        if (intervalId !== undefined) {
          window.clearInterval(intervalId);
        }
        return;
      }

      onUpdate(scrambleText(target, progress, characterSet));
    }, frameDurationMs);
  }, 0);

  return () => {
    window.clearTimeout(startId);
    if (intervalId !== undefined) {
      window.clearInterval(intervalId);
    }
  };
};
