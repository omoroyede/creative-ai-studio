import { describe, expect, it } from "vitest";

import { contactEmail } from "@/lib/portfolio-data";

describe("portfolio contact details", () => {
  it("uses Omoroyede’s provided project email", () => {
    expect(contactEmail).toBe("omoroyede1@gmail.com");
  });
});