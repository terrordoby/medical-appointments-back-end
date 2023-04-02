import { describe, test, expect } from "vitest";
import {randomUUID} from 'crypto'
import dayjs from 'dayjs'
import { CreateDoctorInfoUseCase } from "../create-doctor-info.usecase";
import { DoctorPrismaRepository } from "../../../repository/implements/Doctor.prisma.repository";


describe("Create Doctor Info", () => {

    const repositoryDoctor = new DoctorPrismaRepository()
    const userId = randomUUID()
    test("Should not be able to create a doctor info if doctor doess not exists", () => {
        const createDoctorInfoUseCase = new CreateDoctorInfoUseCase(repositoryDoctor);

        expect(async () => {
            await createDoctorInfoUseCase.execute({
                startAt: dayjs().startOf("day").add(10, 'hour').format("HH:mm"),
                endAt: dayjs().startOf("day").add(18, 'hour').format("HH:mm"),
                price: 150,
                duration: 10
            }, "123455667")
        }).rejects.toThrow("Doctor does not exists")
    })

    test("Should not be able to create a doctor info if endAt is before startAt",async  () => {
        const createDoctorInfoUseCase = new CreateDoctorInfoUseCase(repositoryDoctor);
        
        await repositoryDoctor.save({
            crm: "123456",
            email: "teste",
            id: randomUUID(),
            specialisty_id: randomUUID(),
            user_id: userId
        })

        expect(async () => {
            await createDoctorInfoUseCase.execute({
                startAt: dayjs().startOf("day").add(18, 'hour').format("HH:mm"),
                endAt: dayjs().startOf("day").add(10, 'hour').format("HH:mm"),
                price: 150,
                duration: 10
            }, userId)
        }).rejects.toThrow("Doctor does not exists")
    })
})