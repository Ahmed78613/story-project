// const userController = require('../../Controllers/User')
// const User = require('../../Schema/User');

// const mockSend = jest.fn();
// const mockJson = jest.fn();
// const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
// const mockRes = { status: mockStatus }

// describe("User Endpoints", () => {
//     let api;

//     beforeAll(async () => {
//         api = app.listen(808813, () => console.log("Test Server running on port 808813"))
//     });

//     afterAll(async () => {
//         console.log('Gracefully stopping test server')
//         await api.close()
//     })

//     it('should return a list of all users in database', async () => {
//         const res = await request(api).get('/');
//         expect(res.statusCode).toEqual(200);
//         expect(res.body.length).toEqual(3);
//     });
// })

// describe('User Login', () => {
//     test('Login', async () => {
//         jest.spyOn(User, "getUsers")
//             .mockResolvedValue(new User({ name: "TablesBobby", password: "TablesBobby123"} ));
            
//         const mockReq = { params: { id: 1 } }
//         await authorsController.show(mockReq, mockRes);
//         expect(mockStatus).toHaveBeenCalledWith(200);
//         expect(mockJson).toHaveBeenCalledWith({
//             name: "TablesBobby",
//             password: "TablesBobby123"
//         });
//     })
// });
