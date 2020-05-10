import { CacheStrategies, Scaffold } from "@archetypical/scaffold/lib/index";

const offlineAssets = [
    "/main.bundle.js",
    "/"
];

class Startup {
    configure(builder) {
        builder.useInstallCache(offlineAssets)
            .cache(offlineAssets, CacheStrategies.backgroundFetch);
    }
}

Scaffold
    .createDefaultBuilder("1.0.0")
    .useStartup(Startup)
    .build();