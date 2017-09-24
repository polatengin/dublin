# dublin

*20 Eylül 2017* tarihinde **Microsoft Türkiye** binasında sevgili arkadaşım [Bora Kaşmer](http://www.borakasmer.com) ile birlikte gerçekleştirdiğimiz etkinliğin kodları.

*Not : Kodları çalıştırmadan önce aşağıdaki kodları **Terminal**, **Command Prompt** veya **Powershell** penceresinde çalıştırmanız gerekiyor;*

```
mkdir api
cd api
dotnet new web

cd..

ng new web
```

Projeleri oluşturduktan sonra **dotnet core 2.0** ile geliştirdiğimiz *api* projesini çalıştırmak için

```
dotnet run
```

**Angular 4** ile geliştirdiğimiz *web* projesini çalıştırmak için

```
ng serve
```

komutlarını çalıştırmanız yeterli.

**Angular 4** ile geliştirdiğimiz *web* projesini **Azure** üzerinde yayına almak için

```
ng build --prod --build-optimizer
```

komutunu çalıştırmalı, oluşan dist dizinini **Azure** üzerine *FTP*, vs. ile göndermelisiniz.