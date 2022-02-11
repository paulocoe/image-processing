import supertest from "supertest";
import app from "../app";
const request = supertest(app);

describe("Images Route", () => {
  describe("Test endpoint responses", () => {
    it("Gets success response", async () => {
      const response = await request.get("/images/fjord/320/640");
      expect(response.status).toBe(200);
    });

    it("Gets image not found", async () => {
      const response = await request.get("/images/abc/320/640");
      expect(response.status).toBe(404);
      expect(response.text).toBe("Image 'abc' not found.");
    });

    it("Gets bad request", async () => {
      const response = await request.get("/images/santamonica/2sf34/f5d");
      expect(response.status).toBe(400);
      expect(response.text).toBe(
        `["Width '2sf34' is invalid.","Height 'f5d' is invalid."]`
      );
    });
  });
});
