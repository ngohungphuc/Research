students = []


def get_students_titlecase():
    students_titlecase = []
    for student in students:
        # returns a copy of the string in which first characters of all the words are capitalized
        students_titlecase.append(student["name"].title())
    return students_titlecase


def print_students_titlecase():
    students_titlecase = get_students_titlecase()
    print(students_titlecase)


def add_student(name, student_id=322):
    student = {"name": name, "student_id": student_id}
    students.append(student)


def save_file(student):
    try:
        # a to append
        f = open('student.txt', 'a')
        f.write(student + '\n')
        f.close()
    except Exception:
        print('Could not save file')


def read_file():
    try:
        f = open('student.txt', 'r')
        for student in f.readlines():
            add_student(student)
        f.close()
    except Exception:
        print('Could not read file')


read_file()
print_students_titlecase()

student_name = input("Enter student name: ")
student_id = input("Enter student id: ")

add_student(student_name, student_id)
save_file(student_name)
