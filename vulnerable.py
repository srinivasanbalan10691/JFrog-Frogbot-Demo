# SAST #1: SQL Injection
user_input = request.GET.get('id')
query = f"SELECT * FROM users WHERE id = {user_input}"  # UNSAFE!
cursor.execute(query)

# SAST #2: eval() vulnerability
user_code = request.POST.get('code')
eval(user_code)  # DANGEROUS!

# SAST #3: os.system command injection
import os
cmd = request.GET.get('cmd')
os.system(cmd)  # UNSAFE!
