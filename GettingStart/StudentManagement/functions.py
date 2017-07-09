students = []


def get_students_titlecase():
    students_titlecase = []
    for student in students:
        # returns a copy of the string in which first characters of all the words are capitalized
        students_titlecase = student["name"].title()
    return students_titlecase


def print_students_titlecase():
    students_titlecase = get_students_titlecase()
    print(students_titlecase)


def add_student(name, student_id=322):
    student = {"name": name, "student_id": student_id}
    students.append(student)


student_list = get_students_titlecase()
student_name = input("Enter student name: ")
student_id = input("Enter student id: ")

add_student(student_name, student_id)
print_students_titlecase()
