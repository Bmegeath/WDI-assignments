
#CALCULATOR
#----------------------------------------------------
# class Calculator
#   attr_reader :current_value
  
#   def initialize
#     @current_value = 1
    
    
    
#   end
  
#   def multiply(num)
#     @current_value = num * @current_value
#     @current_value
#   end
 
#   def add(num)
#    @current_value = num + @current_value
#    @current_value
#   end
  
#   def subtract(num)
#      @current_value = @current_value - num
#      @current_value
#   end

#   def divide(num)
#      @current_value = @current_value % num 
#      @current_value
#   end
   
#    def clear()
#      @current_value = 0 
     
#    end 
# end  

# my_calc = Calculator.new

# my_calc


#ELEVATOR

#-----------------------------------------------------------

class Elevator
 attr_reader :current_floor 
 
  def initialize 
    
    @current_floor = 0 
    
  end
  
  def go_up 
    if @current_floor < 12
      @current_floor = @current_floor + 1 
    end
    cheery_greeting
    @current_floor
  end

 
  def go_down
    if @current_floor > 0 
    @current_floor = @current_floor - 1 
  end
    cheery_greeting
    @current_floor
  end
   def cheery_greeting
     p "you're on #{@current_floor}"
   end 
end

  
elv1 = Elevator.new
elv1.go_up
elv1.go_up
elv1.go_up
elv1.go_up
elv1.go_up
elv1.go_up
elv1.go_up
elv1.go_up
elv1.go_up
elv1.go_up
elv1.go_up
elv1.go_up
elv1.go_up
elv1.go_up


