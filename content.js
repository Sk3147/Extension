let skjha = [
    "https://firebasestorage.googleapis.com/v0/b/jungle-book-780b7.appspot.com/o/Photos%2F00100sPORTRAIT_00100_BURST20191112192701939_COVER.jpg?alt=media&token=bfb96588-1f11-44b7-b415-2f6021326734",
    "https://firebasestorage.googleapis.com/v0/b/jungle-book-780b7.appspot.com/o/Photos%2FIMG_20191113_162413_Bokeh.jpg?alt=media&token=affae309-dc2b-4410-893b-ca3d571b7482",
    "https://firebasestorage.googleapis.com/v0/b/jungle-book-780b7.appspot.com/o/Photos%2FIMG_20210126_130243_901.jpg?alt=media&token=3add9273-5d38-419b-ba89-bcfd593e5e45",
    "https://firebasestorage.googleapis.com/v0/b/jungle-book-780b7.appspot.com/o/Photos%2FIMG_20210329_221017_831.jpg?alt=media&token=d082ae56-96ef-4378-80f6-5ea3343bac59",
    "https://firebasestorage.googleapis.com/v0/b/jungle-book-780b7.appspot.com/o/Photos%2FIMG_20210330_112143_576.jpg?alt=media&token=4eca480a-761d-439c-8624-24f168b4ef49",
    "https://firebasestorage.googleapis.com/v0/b/jungle-book-780b7.appspot.com/o/Photos%2FIMG_20210402_182805_241.jpg?alt=media&token=509efa53-87ac-403c-a551-be820a063dd2",
    "https://firebasestorage.googleapis.com/v0/b/jungle-book-780b7.appspot.com/o/Photos%2FIMG_20220103_095157_450.jpg?alt=media&token=a919fb67-0630-468c-8f1a-eefce37e27cc",
    "https://firebasestorage.googleapis.com/v0/b/jungle-book-780b7.appspot.com/o/Photos%2FPicsArt_09-25-12.37.15.jpg?alt=media&token=c7df1281-cacf-4f45-974d-fbb072f16a95",
    "https://firebasestorage.googleapis.com/v0/b/jungle-book-780b7.appspot.com/o/Photos%2FPicsArt_21-12-26_22-12-27-749.jpg?alt=media&token=40b18cc5-9eb5-4937-800b-5a9ef4d407ac",
    "https://firebasestorage.googleapis.com/v0/b/jungle-book-780b7.appspot.com/o/Photos%2FPicsArt_21-12-26_22-31-04-545.jpg?alt=media&token=df78ae3a-97e2-4a34-9de5-67dcd58d6a72"
];
const imgs = document.getElementsByTagName("img")
for(let i=0;i < imgs.length; i++){
    const randomImg = Math.floor(Math.random() * skjha.length)
    imgs[i].src = skjha[randomImg];   
}

