const multiplyValue = (value: number, multiplier: number = 2): number => {
    return value * multiplier
}


const processInput = (value: string | number | boolean): unknown => {
    if (typeof value === "string") {
        return value.trim().toLowerCase()
    }
    else if (typeof value === "number") {
        return value * 10
    }
    else if (typeof value === "boolean" && value === true) {
        return "Active"
    }
    else {
        return "Inactive"
    }
}



const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`
}



const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    let newArray: T[] = []
    return newArray.concat(...arrays)
}



interface Course {
    title: string,
    students: number,
    isPublished: boolean
}
const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    const popularCourses = courses.filter(course => (
        course.isPublished === true && course.students >= minStudents))
    return popularCourses
}




const pluckValues = <T, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}




class Employee {
    constructor(
        protected name: string,
        private baseSalary: number) { }

    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        baseSalary: number,
        private department: string) {
        super(name, baseSalary)
    }

    getRoleInfo(){
        return `Manager of ${this.department}: ${this.name}`
    }
}




const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000)
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"))
        }
    })
}










