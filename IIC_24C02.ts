/**
 * makecode Four Digit Display (TM1650) Package.
 * From microbit/micropython Chinese community.
 * http://www.micropython.org.cn
 */

/**
 * TM1650 digit Display
 */
//% weight=100 color=#64C800 icon="\uf136" block="IIC_24C02"
namespace IIC_24C02 {

    // 设备地址
    let IIC_24C02_ADDRESS = 80

    //% help=pins/i2c-write-number blockGap=8 advanced=true
    //% blockId=IIC_24C02_writenumber block="24C02数据写入|写入数值 %value"
    //% weight=50 blockGap=8
    export function writeNumber(value: number): void {
        let buf = pins.createBuffer(pins.sizeOf(NumberFormat.UInt32BE))
        buf.setNumber(NumberFormat.UInt32BE, 0, value)
        pins.i2cWriteBuffer(IIC_24C02_ADDRESS, buf, false)
    }

    //% help=pins/i2c-read-number blockGap=8 advanced=true
    //% blockId=IIC_24C02_readnumber block="24C02数据读取|X" weight=7
    //% weight=50 blockGap=8
    export function readNumber(): number {
        pins.i2cWriteNumber(IIC_24C02_ADDRESS, 0x00, NumberFormat.UInt8BE, true)
        let data = pins.i2cReadNumber(IIC_24C02_ADDRESS, NumberFormat.UInt16BE, false)
        return data
    }

}