export class HealthService {
    getStatus() {
      return {
        message: "Bynoculer API running",
        status: "ok"
      };
    }
  }