const Router = express.Router();

const proyectController = require('../controllers/proyect.controller.js');
const createProyec = proyectController.createProyec;
const getProyecs = proyectController.getProyecs;


const router = Router();

router.get('/', getProyecs);
router.post('/', createProyec);

export default router;