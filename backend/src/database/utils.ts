import { EntityNotFoundError } from "../errors/types.error";
import { DatabaseConnection } from "./connection";
import { rm } from "fs/promises";

const manager = DatabaseConnection.manager;

export async function getAll(modelName: string) {
    return await manager.find(modelName);
}

export async function getById(modelName: string, id: string) {
    const foundEntity = await manager.findOneOrFail(modelName, { where: { id } });
    if (!foundEntity) throw new EntityNotFoundError();
    return foundEntity;
}

export async function create(modelName: string, data: any) {
    const entity = manager.create(modelName, data);
    await manager.save(entity);
    return entity;
}

export async function update(modelName: string, id: string, data: any) {
    const entity = await manager.findOneOrFail(modelName, { where: { id } });
    if (!entity) throw new EntityNotFoundError();
    await manager.update(modelName, id, data);
    return entity;
}

export async function softDelete(modelName: string, id: string) {
    this.update(modelName, id, { isActive: false });
}

export async function hardDelete(modelName: string, id: string) {
    const entity = await manager.findOneOrFail(modelName, { where: { id } });
    if (!entity) throw new EntityNotFoundError();
    await manager.delete(modelName, id);
}

export async function hardDeleteWithFile(modelName: string, id: string) {
    const entity = await manager.findOneOrFail(modelName, { select: { id: true, file: true }, where: { id } });
    if (!entity) throw new EntityNotFoundError();
    const filePath = `./backend/uploads/${entity.file}`;
    await rm(filePath);
    await manager.delete(modelName, id);
}
