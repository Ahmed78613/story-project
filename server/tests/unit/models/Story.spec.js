const Story = require("../../../Schema/Story");

describe ("Story", () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    describe("story", () => {
        test("Does", async () => {
            let testYes = "Yes"
            expect(testYes).toBe("Yes")
        })
    })
})
