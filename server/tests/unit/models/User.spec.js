const userController = require("../../../Routes/User");
const User = require("../../../Schema/User");

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe ("User", () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    describe("user", () => {
        test("Does", async () => {
            let testYes = "Yes"
            expect(testYes).toBe("Yes")
        })
    })

    describe('index', () => {
        test('it returns stories with a 200 status code', async () => {
            let testUsers = [{name: "User1", password: "Password1"}, {name: "User2", password: "Password2"}]
            jest.spyOn(User)
                 .mockResolvedValue(testUsers);
            await userController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(testUsers);
        })

        test("Does", async () => {
            let testYes = "Yes"
            expect(testYes).toBe("Yes")
        })

        test("Does It Really?", async () => {
            let testYes = "Yes"
            expect(testYes).toBe("Yes")
        })
    });
})
