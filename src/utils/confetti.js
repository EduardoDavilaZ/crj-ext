import { tsParticles } from "@tsparticles/engine";
import { loadConfettiExplosionsPreset } from "@tsparticles/preset-confetti-explosions";

let isLoaded = false;

export async function triggerConfetti() {
    if (!isLoaded) {
        await loadConfettiExplosionsPreset(tsParticles);
        isLoaded = true;
    }

    await tsParticles.load({
        id: "tsparticles-confetti",
        options: {
            preset: "confettiExplosions",
            particles: {
                color: {
                    value: ["#6cb9b7", "#f6333f", "#ead94c", "#dd7373", "#3b3561"]
                }
            }
        }
    });
}