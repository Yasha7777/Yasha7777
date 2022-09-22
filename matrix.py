print('Решение квадратных матриц')
m1 = []
m2 = []
m3 = []
m4 = []
print('Укажи какой размер имеет матрица')
x = int(input())
if x == 2:
    print('Введи первую строку')
    a = int(input())
    b = int(input())
    m1 = [a,b]
    print('Введи вторую строку')
    a = int(input())
    b = int(input())
    m2 = [a,b]
    deff = m1[0]*m2[1] - m1[1]*m2[0]
    print(m1)
    print(m2)
    print('Определитель =' ,deff)

if x == 3:
    print('Введи первую строку')
    for i in range(x):
        m1.append(int(input()))
    print('Введи вторую строку')
    for i in range(x):
        m2.append(int(input()))
    print('Введи третью строку')
    for i in range(x):
        m3.append(int(input()))
    deff = m1[0]*m2[1]*m3[2] + m1[1]*m2[2]*m3[0] + m1[2]*m2[0]*m3[1] - m1[2]*m2[1]*m3[0] - m1[1]*m2[0]*m3[2] - m1[0]*m2[2]*m3[1]
    print(m1)
    print(m2)
    print(m3)
    print('Определитель =' ,deff)

if x == 4:
    print('Введи первую строку')
    for i in range(x):
        m1.append(int(input()))
    print('Введи вторую строку')
    for i in range(x):
        m2.append(int(input()))
    print('Введи третью строку')
    for i in range(x):
        m3.append(int(input()))
    print('Введи четвертую строку')
    for i in range(x):
        m4.append(int(input()))

    print(m1)
    print(m2)
    print(m3)
    print(m4)
    
    otvet = 0
    
    m11 = [m2[1], m2[2], m2[3]]
    m22 = [m3[1], m3[2], m3[3]]
    m33 = [m4[1], m4[2], m4[3]]
    def1 = m1[0] * (1) * (m11[0]*m22[1]*m33[2] + m11[1]*m22[2]*m33[0] + m11[2]*m22[0]*m33[1] - m11[2]*m22[1]*m33[0] - m11[1]*m22[0]*m33[2] - m11[0]*m22[2]*m33[1])
    
    m11 = [m2[0], m2[2], m2[3]]
    m22 = [m3[0], m3[2], m3[3]]
    m33 = [m4[0], m4[2], m4[3]]
    def2 = m1[1] * (-1) * (m11[0]*m22[1]*m33[2] + m11[1]*m22[2]*m33[0] + m11[2]*m22[0]*m33[1] - m11[2]*m22[1]*m33[0] - m11[1]*m22[0]*m33[2] - m11[0]*m22[2]*m33[1])
    
    m11 = [m2[0], m2[1], m2[3]]
    m22 = [m3[0], m3[1], m3[3]]
    m33 = [m4[0], m4[1], m4[3]]
    def3 = m1[2] * (1) * (m11[0]*m22[1]*m33[2] + m11[1]*m22[2]*m33[0] + m11[2]*m22[0]*m33[1] - m11[2]*m22[1]*m33[0] - m11[1]*m22[0]*m33[2] - m11[0]*m22[2]*m33[1])
    
    m11 = [m2[0], m2[1], m2[2]]
    m22 = [m3[0], m3[1], m3[2]]
    m33 = [m4[0], m4[1], m4[2]]
    def4 = m1[3] * (-1) * (m11[0]*m22[1]*m33[2] + m11[1]*m22[2]*m33[0] + m11[2]*m22[0]*m33[1] - m11[2]*m22[1]*m33[0] - m11[1]*m22[0]*m33[2] - m11[0]*m22[2]*m33[1])
    
    otvet = def1 + def2 + def3 + def4
    print(otvet)