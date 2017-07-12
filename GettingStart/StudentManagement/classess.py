students = []


class Student:
    # pass keyword tell interpreter do nothing
    # self keyword refer to instance of the class
    def __init__(self, name, student_id=322):
        student = {"name": name, "student_id": student_id}
        students.append(student)

    def __str__(self):
        return "Student"


mark = Student("Mark")

print(mark)
