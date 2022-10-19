const storyModel = require("../Schema/Story");

const getStories = async (req, res) => {
	const { name } = req.user;
	try {
		const stories = await storyModel.find({ username: name });
		res.status(200).json({ result: stories });
	} catch (error) {
		res.status(404).json({ msg: error.message });
	}
};

const addNewStory = async (req, res) => {
	try {
		const newStory = await storyModel.create(req.body);
		res.status(201).json({ result: newStory });
	} catch (error) {
		res.status(404).json({ msg: error.message });
	}
};

// Placeholders from https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/

//Post Method
router.post('/post', (req, res) => {
    res.send('Post API')
})

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = { getStories, addNewStory };
