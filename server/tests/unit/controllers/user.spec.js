const Story = require("../../../Routes/User");

describe ("User", () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    describe("user", () => {
        test("Does", async () => {
            let testYes = "Yes"
            expect(testYes).toBe("Yes")
        })
    })
})
