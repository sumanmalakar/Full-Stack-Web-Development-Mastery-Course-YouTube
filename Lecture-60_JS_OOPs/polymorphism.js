class Bank{
    roi(){
        console.log("RBI Interest rate = 4.2")
    }
}
class SBI extends Bank{
     roi(){
        console.log("RBI Interest rate = 7.2")
    }
}
class HDFC extends Bank{
     roi(){
        console.log("RBI Interest rate = 8.2")
    }
}
class PNB extends Bank{
     roi(){
        console.log("RBI Interest rate = 7.5")
    }
}

// sbi
const s = new SBI();
s.roi();

// hdfc
const h = new HDFC();
h.roi();

// pnb
const p = new PNB();
p.roi();