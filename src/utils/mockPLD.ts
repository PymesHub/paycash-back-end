enum PLDStatus {
  isHghRisk = "isHghRisk",
  isLowRisk = "isLowRisk",
  isModerateRisk = "isModerateRisk",
}

function getRandomPLDStatus(): Promise<PLDStatus> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const statuses = Object.values(PLDStatus);
      const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];
      resolve(randomStatus as PLDStatus);
    }, 2000); // Esperar 2 segundos
  });
}

export { getRandomPLDStatus };
