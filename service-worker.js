if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("/service-worker.js");
      console.log("Service Worker registrado com sucesso:", registration);
    } catch (error) {
      console.log("Falha ao registrar o Service Worker:", error);
    }
  });
}
