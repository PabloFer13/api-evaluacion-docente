import periodosServices from '../services/periodos';

export default {
  async current(req, res) {
    const currentPeriodo = await periodosServices.getCurrentPeriodo();

    if (!currentPeriodo) {
      res.status(401)
        .send({ err: 'inactive-period', message: 'No period currently running' });
    } else {
      res.status(200)
        .send({ periodo: currentPeriodo });
    }
  },
};
