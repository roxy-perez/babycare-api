import type { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';
import { Appointment } from '../models';

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { babyId } = req.params;
    const appointments = await Appointment.findAll({
      where: {
        babyId,
        date: {
          [Op.gte]: new Date(),
        },
      },
      order: [['date', 'ASC']],
    });
    return res.json({ data: { appointments } });
  } catch (error: unknown) {
    next(error);
  }
};

const getOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findOne({
      where: { id },
    });
    return res.json({ data: { appointment } });
  } catch (error: unknown) {
    next(error);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const appointment = await Appointment.create(req.body);
    return res.json({ data: { appointment } });
  } catch (error: unknown) {
    next(error);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.update(req.body, {
      where: { id },
    });
    return res.json({ data: { appointment } });
  } catch (error: unknown) {
    next(error);
  }
};

const deleteOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.destroy({
      where: { id },
    });
    return res.json({ data: { appointment } });
  } catch (error: unknown) {
    next(error);
  }
};

export default {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};
