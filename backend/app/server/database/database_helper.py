def student_helper(student) -> dict:
    return {
        "id": str(student['_id']),
        "fullname": student['fullname'],
        "email": student['email'],
        "course_of_study": student['course_of_study'],
        "year": student['year'],
        "GPA": student['gpa']
    }
    

def asset_helper(asset) -> dict:
    return asset

def asset_helperV1(asset) -> dict:
    return {
        '_id': str(asset['_id']), 
        'datetime': asset['datetime'], 
        'topic': asset['topic'], 
        'name': asset['name'], 
        'url': asset['url']
        }

def asset_helperV2(asset) -> dict:
    return {
        '_id': str(asset['_id']), 
        'datetime': asset['datetime'], 
        'topic': asset['topic'], 
        'name': asset['name'], 
        'url': asset['url'],
        'parameters':asset['parameters']
        }

def admin_helper(admin) -> dict:
    return {
        "id": str(admin['_id']),
        "fullname": admin['fullname'],
        "email": admin['email'],
    }
