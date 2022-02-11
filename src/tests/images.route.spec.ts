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

    it("Gets bad request when width and height are NaN", async () => {
      const response = await request.get("/images/santamonica/2sf34/f5d");
      expect(response.status).toBe(400);
      expect(response.text).toBe(
        `["Width '2sf34' must be a positive integer number.","Height 'f5d' must be a positive integer number."]`
      );
    });

    it("Gets bad request when width and height are non positive", async () => {
      const response = await request.get("/images/santamonica/-3/0");
      expect(response.status).toBe(400);
      expect(response.text).toBe(
        `["Width '-3' must be a positive integer number.","Height '0' must be a positive integer number."]`
      );
    });
  });
});
