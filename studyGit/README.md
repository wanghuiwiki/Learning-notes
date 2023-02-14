## 2023-1-1 ѧϰ<<Git��������ŵ�ʵս���>>  

>ѧϰ�ļ�Ϊindex.html��images�ļ���;���ս�ͼһ��һ������,ϣ������ѧϰGit��������!��������:

* ʲô��git
* Git��Github���ߵ�����
* Github�ʺ�ע��
* Git�İ�װ
* Git�ı��ز�����������{ȫ������|����ָ��}
* Git�İ汾���˲���
* GithubԶ�ֿ̲�Ĵ���
* GithubԶ�ֿ̲��ʹ��_HTTPSЭ��
* GithubԶ�ֿ̲��ʹ��_SSHЭ��
* Git�ķ�֧����
* ��ͻ�Ĳ�������
* �˽�ͼ�λ�������
* �����ļ�����

***
## 2023-2-4ѧϰ����  "Gitʹ�ü���ָ��"
>[Git](https://book.git-scm.com/downloads "Git Downloads") is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
>
>Git is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like cheap local branching, convenient staging areas, and multiple workflows.
>>����:Git ��һ����ѵĿ�Դ�ֲ�ʽ�汾����ϵͳ��ּ�ڿ��ٸ�Ч�ش����С����Ŀ��������Ŀ���������ݡ�
>>
>>Git ����ѧϰ��ռ�ÿռ�С�����ܿ������硣 ����Խ�� Subversion��CVS��Perforce �� ClearCase �� SCM ���ߣ��������۵ı��ط�֧���������ʱ����Ͷ�������������ԡ�

### �����²ֿ�
�������ļ��У��򿪣�Ȼ��ִ��`git init`�Դ����µ� git �ֿ⡣
### ����ֿ�
ִ�����������Դ���һ�����زֿ�Ŀ�¡�汾��`git clone /path/to/repository`
���ӣ�`git clone username@host:/path/to/repository`
### ������
��ı��زֿ��� git ά�������á�������ɡ���һ�������**����Ŀ¼**��������ʵ���ļ����ڶ�����**��������Index��**�����������������ʱ������ĸĶ��������**HEAD**��ָ�������һ���ύ��Ľ����

![trees.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6a1ce8fe82e4d6b9fb0eb196d4a08a9~tplv-k3u1fbpfcp-watermark.image?)
### ������ύ
����Լƻ��Ķ�����������ӵ�����������ʹ���������
```
git add <filename>
git add *
```
���� git �����������̵ĵ�һ����ʹ������������ʵ���ύ�Ķ���
```
git commit -m "�����ύ��Ϣ"
```
���ڣ���ĸĶ��Ѿ��ύ����**HEAD**�����ǻ�û�����Զ�˲ֿ⡣
### ���͸Ķ�
��ĸĶ������Ѿ��ڱ��زֿ��**HEAD**�ˡ�ִ�����������Խ���Щ�Ķ��ύ��Զ�˲ֿ⣺
```
git push origin master
```
���԰� master ��������Ҫ���͵��κη�֧��

����㻹û�п�¡���вֿ⣬��������Ĳֿ����ӵ�ĳ��Զ�̷������������ʹ������������ӣ�
```
git remote add origin <server>
```
�������ܹ�����ĸĶ����͵�����ӵķ�������ȥ�ˡ�
### ��֧
��֧�����������Կ�����Ե�����ġ����㴴���ֿ��ʱ��master �ǡ�Ĭ�ϵġ�����������֧�Ͻ��п�������ɺ��ٽ����Ǻϲ�������֧�ϡ�

![branches.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e3c0832d9374cb2a4eb3008309742ef~tplv-k3u1fbpfcp-watermark.image?)

����һ��������feature_x���ķ�֧�����л���ȥ��`git checkout -b feature_x`

�л�������֧��`git checkout master`

�ٰ��½��ķ�֧ɾ����`git branch -d feature_x`

�����㽫��֧���͵�Զ�˲ֿ⣬��Ȼ�÷�֧���� ��Ϊ���������ģ�`git push origin <branch>`
### ������ϲ�
Ҫ������ı��زֿ������¸Ķ���ִ�У�`git pull`

������Ĺ���Ŀ¼�� ��ȡ��fetch�� �� �ϲ���merge�� Զ�˵ĸĶ���

Ҫ�ϲ�������֧����ĵ�ǰ��֧������ master����ִ�У�`git merge <branch>`

��������£�git ���᳢��ȥ�Զ��ϲ��Ķ������ҵ��ǣ��Զ��ϲ����Ǵδζ��ܳɹ��������ܵ��� ��ͻ��conflicts���� 

��ʱ�����Ҫ���޸���Щ�ļ�������ϲ���Щ ��ͻ��conflicts�� �ˡ�����֮������Ҫִ�����������Խ����Ǳ��Ϊ�ϲ��ɹ���`git add <filename>`

�ںϲ��Ķ�֮ǰ��Ҳ����ʹ����������鿴��`git diff <source_branch> <target_branch>`
### ��ǩ
���������ʱ������ǩ���Ǳ��Ƽ��ġ����Ǹ����и���� SVN ��Ҳ�С�����ִ�����������Դ���һ������ 1.0.0 �ı�ǩ��
```
git tag 1.0.0 1b2e1d63ff
```
1b2e1d63ff ������Ҫ��ǵ��ύ ID ��ǰ 10 λ�ַ���ʹ�����������ȡ�ύ ID��`git log`

��Ҳ�����ø��ύ ID ����һЩ��ǰ��λ��ֻҪ����Ψһ�ġ�

### �滻���ظĶ�
�����������£���Ȼ�����ǲ����ܵģ��������ʹ�����������滻�����ظĶ���

```
git checkout -- <filename>
```

�������ʹ�� HEAD �е����������滻����Ĺ���Ŀ¼�е��ļ�������ӵ��������ĸĶ����Լ����ļ���������Ӱ�졣

��������Ҫ���������еı��ظĶ����ύ�����Ե��������ϻ�ȡ���µİ汾�����㱾������ָ֧������

```
git fetch origin
git reset --hard origin/master
```
___
�ڽ���ͼ�λ� git��`gitk`

��ɫ�� git �����`git config color.ui true`

��ʾ��ʷ��¼ʱ��ֻ��ʾһ��ע����Ϣ��`git config format.pretty oneline`

����������ļ�����������`git add -i`

~~˵��:����ת����[Git ʹ�ü���ָ��](https://support.github.com/)�Ƽ��ο�:��[Git �����ο���](https://book.git-scm.com/)��[GitHub����](https://support.github.com/)~~

