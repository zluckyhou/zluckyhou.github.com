import os
current_path = os.getcwd()
print(current_path)

with open('./python_scripts/test_github_push.txt','w') as f:
	f.write('this is a test file')
