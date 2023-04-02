import {test, expect, describe} from 'vitest'
import { Doctor } from '../doctor.entity'

describe("Doctor entity", () => {
    test("should be able to create a new doctor", () => {
        const doctor = Doctor.create({
            crm: "123456",
            email: "enmail@email.com",
            specialityId: "spec_id",
            userId: "user_id"
        })
    
        expect(doctor).toBeInstanceOf(Doctor)
        expect(doctor).toHaveProperty("id")
    })
    
    test("should not able to create a new Doctor with crm invalid", () => {
    
        expect(() => {
            const doctor = Doctor.create({
                crm: "",
                email: "enmail@email.com",
                specialityId: "spec_id",
                userId: "user_id"
            })
        }).toThrow("CRM is required")
    })
    
    test("should not able to create a new Doctor with crm length invalid", () => {
    
        expect(() => {
            const doctor = Doctor.create({
                crm: "1234",
                email: "enmail@email.com",
                specialityId: "spec_id",
                userId: "user_id"
            })
        }).toThrow("CRM length is incorrect")
    })
    
    test("should not able to create a new Doctor with crm email invalid", () => {
    
        expect(() => {
            const doctor = Doctor.create({
                crm: "123456",
                email: "",
                specialityId: "spec_id",
                userId: "user_id"
            })
        }).toThrow("Email is required")
    })
})

